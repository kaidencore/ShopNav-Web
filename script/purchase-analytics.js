const monthlyEarnings = [13000, 29000, 32000, 36000, 35000, 42000];

const earningsCanvas = document.getElementById('earnings-chart');
const earningsChart = new Chart(earningsCanvas, {
    type: 'line',
    data: {
        labels: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earnings',
            data: monthlyEarnings,
            fill: false,
            backgroundColor: '#ff8c00',
            borderColor: '#ff8c00',
            borderWidth: 1,
            pointBackgroundColor: '#ff8c00',
            pointRadius: 3,
            pointHoverRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value, index, values) {
                        return '₱' + value.toLocaleString(); 
                    },
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
    }
});
