document.getElementById('downloadImgBtn').addEventListener('click', () => {
    const element = document.getElementById('resume');
    html2canvas(element, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'My_Resume.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});
