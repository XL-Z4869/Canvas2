window.addEventListener('load', () => {
    const color = document.querySelector("#color")

    const range = document.querySelector("#range")


    let colorValue = color.value,
        rangeValue = range.value;
    color.addEventListener('change', () => {
        colorValue = color.value;
    });
    range.addEventListener('change', () => {
        rangeValue = range.value;
    });

    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext('2d');
    let flag = false;


    cvs.addEventListener('mousedown', (e) => {
        flag = true;

        const top = cvs.getBoundingClientRect().top;
        const left = cvs.getBoundingClientRect().left;
        const mouseX = e.pageX - left;
        const mouseY = e.pageY - top;

        ctx.strokeStyle = colorValue;
        ctx.lineWidth = rangeValue;
        ctx.lineCap = "round"
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY)
    });

    cvs.addEventListener('mousemove', (e) => {
        const top = cvs.getBoundingClientRect().top;
        const left = cvs.getBoundingClientRect().left;
        const mouseX = e.pageX - left;
        const mouseY = e.pageY - top;
        ctx.strokeStyle = colorValue;
        ctx.lineWidth = rangeValue;
        if (flag) {
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke();
        }

    });
    cvs.addEventListener("mouseup", () => {
        flag = false
    })
    const clear = document.querySelector("#clear")
    clear.addEventListener('click', () => {
        ctx.clearRect(0, 0, 1000, 500)
    })

})