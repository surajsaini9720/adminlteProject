import { Component , AfterViewInit  } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-active-users',
  standalone: false,
  templateUrl: './active-users.component.html',
 styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const ctx = document.getElementById('chart-bars') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Sales',
              tension: 0.4,
              borderWidth: 0,
              borderRadius: 4,
              borderSkipped: false,
              backgroundColor: '#fff',
              data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
              maxBarThickness: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          },
          scales: {
            y: {
              ticks: {
                color: '#fff'
              },
              grid: {
                display: false
              }
            },
            x: {
              ticks: {
                display: false
              },
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  }
}
