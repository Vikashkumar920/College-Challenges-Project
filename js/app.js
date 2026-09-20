console.log(deliveryNetwork);
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const findRouteBtn = document.getElementById("find-route");
const routeOutput = document.getElementById("route-output");

deliveryNetwork.locations.forEach(location => {
  const option1 = document.createElement("option");
  option1.value = location.id;
  option1.textContent = location.name;
  fromSelect.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = location.id;
  option2.textContent = location.name;
  toSelect.appendChild(option2);
});

function buildGraph() {
  const graph = {};

  deliveryNetwork.locations.forEach(location => {
    graph[location.id] = [];
  });

  deliveryNetwork.roads.forEach(road => {
    graph[road.from].push({
      node: road.to,
      distance: road.distance
    });

    graph[road.to].push({
      node: road.from,
      distance: road.distance
    });
  });

  return graph;
}

function getLocationName(id) {
  return deliveryNetwork.locations.find(loc => loc.id === id).name;
}

function dijkstra(start, end) {
  const graph = buildGraph();

  const distances = {};
  const previous = {};
  const visited = new Set();

  deliveryNetwork.locations.forEach(location => {
    distances[location.id] = Infinity;
    previous[location.id] = null;
  });

  distances[start] = 0;

  while (true) {
    let currentNode = null;
    let minDistance = Infinity;

    for (let node in distances) {
      if (
        !visited.has(node) &&
        distances[node] < minDistance
      ) {
        minDistance = distances[node];
        currentNode = node;
      }
    }

    if (currentNode === null) break;

    if (currentNode === end) break;

    visited.add(currentNode);

    graph[currentNode].forEach(neighbour => {
      const newDistance =
        distances[currentNode] + neighbour.distance;

      if (newDistance < distances[neighbour.node]) {
        distances[neighbour.node] = newDistance;
        previous[neighbour.node] = currentNode;
      }
    });
  }

  const path = [];
  let current = end;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path,
    distance: distances[end]
  };
}

findRouteBtn.addEventListener("click", () => {
  const start = fromSelect.value;
  const end = toSelect.value;

  if (start === end) {
    routeOutput.innerHTML =
      "<p>Please select different locations.</p>";
    return;
  }

  const result = dijkstra(start, end);

  const routeNames = result.path.map(id =>
    getLocationName(id)
  );

  routeOutput.innerHTML = `
    <h3>Route</h3>
    <p>${routeNames.join(" → ")}</p>

    <h3>Total Distance</h3>
    <p>${result.distance} km</p>

    <h3>Stops</h3>
    <p>${routeNames.length}</p>

    <h3>Estimated Time</h3>
    <p>${result.distance * 5} minutes</p>
  `;
});