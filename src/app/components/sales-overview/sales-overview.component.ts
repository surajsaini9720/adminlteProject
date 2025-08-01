import { Component, AfterViewInit } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-sales-overview',
  standalone: false,
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.css']
})
export class SalesOverviewComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const ctx2 = document.getElementById("chart-line") as HTMLCanvasElement;
    if (ctx2) {
      const gradientStroke1 = ctx2.getContext('2d')!.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
      gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)');

      const gradientStroke2 = ctx2.getContext('2d')!.createLinearGradient(0, 230, 0, 50);
      gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
      gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)');

      new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Mobile apps",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              borderColor: "#cb0c9f",
              backgroundColor: gradientStroke1,
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
            },
            {
              label: "Websites",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              borderColor: "#3A416F",
              backgroundColor: gradientStroke2,
              fill: true,
              data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
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
              grid: {
                drawBorder: false,
                display: true,
                drawTicks: false,
                borderDash: [5, 5]
              },
              ticks: {
                padding: 10,
                color: '#b2b9bf',
                font: {
                  size: 11,
                  family: "Inter",
                  style: 'normal',
                  lineHeight: 2
                }
              }
            },
            x: {
              grid: {
                drawBorder: false,
                display: false,
                drawTicks: false
              },
              ticks: {
                color: '#b2b9bf',
                padding: 20,
                font: {
                  size: 11,
                  family: "Inter",
                  style: 'normal',
                  lineHeight: 2
                }
              }
            }
          }
        }
      });
    }
  }
}
