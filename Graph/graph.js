class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }


    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }


    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex , adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1, vertex2){
       return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
       )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    BFS(startingVertex){
        const visited = new Set();
        const queue = [startingVertex];
        const result = [];

        visited.add(startingVertex);

        while(queue.length > 0){
            const currentVertex = queue.shift();
            result.push(currentVertex);

            const neighbors = this.adjacencyList[currentVertex];
            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }


    DFS(startingVertex){
        const visited = new Set();
        const result = []

        const dfsRecursive = (vertex) => {
            if(!vertex) return;

            visited.add(vertex)
            result.push(vertex)

            const neighbors = this.adjacencyList[vertex];
            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    dfsRecursive(neighbor) 
                }
            }
        }
        dfsRecursive(startingVertex)
        return result;
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()


console.log(graph.hasEdge("A","B"));

// graph.removeVertex("B")
graph.display()

console.log("BFS Traversal starting from vertex A:", graph.BFS("A"));
console.log("DFS Traversal starting from vertex A:", graph.DFS("A"));