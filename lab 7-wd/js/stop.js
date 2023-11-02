$(document).ready(function() {
    let startTime = 0;
    let running = false;
    let intervalId;

    const stopwatchElement = $("#stopwatch");
    const datePickerElement = $("#datepicker");
    const startButton = $("#startButton");
    const stopButton = $("#stopButton");
    const resetButton = $("#resetButton");

    async function updateStopwatch() {
        while (running) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            startTime++;
            const hours = Math.floor(startTime / 3600);
            const minutes = Math.floor((startTime % 3600) / 60);
            const seconds = startTime % 60;
            stopwatchElement.text(
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            );
        }
    }

    startButton.on("click", function() {
        if (!running) {
            running = true;
            updateStopwatch();
        }
    });

    stopButton.on("click", function() {
        running = false;
    });

    resetButton.on("click", function() {
        running = false;
        startTime = 0;
        stopwatchElement.text("00:00:00");
    });

    // Initialize the datepicker
    datePickerElement.datepicker({
        dateFormat: "dd/mm/yy", // Change the date format if needed
        minDate: null, // Allow past dates
        maxDate: null, // Allow future dates
        beforeShow: function(input, inst) {
            inst.dpDiv.css({
                marginTop: input.offsetHeight + "px"
            });
        }
    });
    datePickerElement.attr("readonly", "readonly"); // Make the date input non-editable
});