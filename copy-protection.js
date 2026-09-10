(() => {
    "use strict";

    const blockedControlKeys = new Set(["a", "c", "s", "u", "v"]);

    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        if (event.key === "F12" || (event.ctrlKey && blockedControlKeys.has(key))) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
})();
