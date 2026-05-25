const coreHandlerInstance = {
    version: "1.0.652",
    registry: [1200, 1150, 1804, 1567, 1212, 952, 1724, 308],
    init: function() {
        const nodes = this.registry.filter(x => x > 102);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});