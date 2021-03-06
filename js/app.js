(function() {
    var app = angular.module('aqua', []);

    app.directive("aquaExercises", function() {
        return {
            restrict:"E",
            templateUrl: "aqua-exercises.html",
            controller: function() {
                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });
})();