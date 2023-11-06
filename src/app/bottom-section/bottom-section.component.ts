import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bottom-section',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="flex-3-col">
  <div class="card-style">
    <div class="title-section">
      <h6 class="sub-title">Sales Statistics</h6>
      <select class="custome-select">
        <option value="" hidden>All Days</option>
      </select>
    </div>
    <div class="chart-container">
      <canvas #Canvas id="LineChart">{{ linechart }}</canvas>

    </div>
  </div>
  <div class="card-style">
    <div class="title-section position-absolute">
      <h6 class="sub-title">Balanced Overview</h6>

    </div>
    <div class="chart-container">
      <canvas id="BarChart" >{{ barchart }}</canvas>
    </div>
  </div>
  <div class="card-style">
    <div class="title-section">
      <h6 class="sub-title">Top Product</h6>
      <div class="link">
        <a href="#"><i class="fa fa-ellipsis-h"></i></a>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="PieChart">{{ piechart }}</canvas>
      <div class="center-info">
        <h1 class="sub-title">50%</h1>
        <span class="text_desc">Popular Items</span>
      </div>
    </div>
  </div>
  </div>
  `,
  styleUrls: ['./bottom-section.component.scss']
})
export class BottomSectionComponent implements OnInit, AfterViewInit {

  @ViewChild('Canvas') LineChartCanvas!: ElementRef;
  linechart: any;
  barchart: any;
  piechart: any;

  ngOnInit(): void {
    this.createBarChart();
    this.createPieChart();

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createLineChart();
    }, 0)
  }
  createLineChart() {
    let options: any = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            font: {
              family: 'Poppins,sans-serif'
            }
          }
        },
        y: {
          stacked: true,
          ticks: {
            font: {
              family: 'Poppins,sans-serif'
            },
          }
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(255,255,255,1)",
          titleColor: 'rgba(62,91,208,.9)',
          bodyColor: 'rgba(0,0,0,0.4)',
          bodyAlign: "center",
          bodyFont: {
            family: "Poppins,sans-serif",
            size: 15
          },
          displayColors: false,
          borderWidth: 1,
          titleSpacing: 1,
          borderColor: "rgba(0,0,0,0.2)",
          titleFont: {
            family: 'Poppins,sans-serif',
            size: 18,
          },
          padding: 15,
          xAlign: "center",
          yAlign: "bottom",
          callbacks: {
            label: function (context: any) {
              let title = context.label;
              return title;
            },
            title: function (context: any) {
              let label = new Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
              }).format(context[0].parsed.y);
              return label;
            }
          }
        }

      }
    };

    let labels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const gradient = this.LineChartCanvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)");
    gradient.addColorStop(0, "rgba(128, 182, 244, 0.6)");
    let dataset: any = [
      {
        data: ['167', '276', '372', '229', '392',
          '474', '573', '576'],
        borderColor: "rgba(0,0,0,0.1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(0,0,0,0.3)",
        pointBorderColor: "rgba(255,255,255,0.5)",
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(0,0,0,0.5)",
        pointHoverBorderColor: "rgba(255,255,255,0.5)",
        spanGaps: true,
        tension: 0.4
      },
      {
        data: ['267', '376', '472', '329', '492',
          '574', '673', '676'],
        backgroundColor: gradient,
        borderColor: "rgba(72,100,250,0.4)",
        pointBackgroundColor: "rgba(72,100,250,0.7)",
        pointBorderColor: "rgba(255,255,255,0.2)",
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(72,100,250,0.5)",
        pointHoverBorderColor: "rgba(255,255,255,0.5)",
        pointRadius: 3,
        fill: true,
        spanGaps: true,
        pointBorderWidth: 2,
        tension: 0.4
      },


    ];
    this.linechart = new Chart("LineChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: dataset
      },
      options: options
    });


  }
  createBarChart() {
    // options
    let options: any = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            font: {
              family: 'Poppins,sans-serif'
            }
          }
        },
        y: {
          stacked: true,
          ticks: {
            font: {
              family: 'Poppins,sans-serif'
            }
          }
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          maxHeight: 100,
          labels: {
            boxWidth: 10,
            boxHeight: 10,
            padding: 10,
            font: {
              family: 'Poppins,sans-serif'
            }
          }
        }
      }
    };
    let labels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dataset: any = [
      {
        label: "Income",
        data: ['267', '376', '472', '329', '492',
          '574', '443'],
        backgroundColor: 'rgb(62,91,208)',
        barThickness: 8,
        borderRadius: 100
      },
      {
        label: "Borrow",
        data: ['267', '376', '472', '329', '492',
          '274', '373'],
        barThickness: 8,
        borderRadius: 100,
        backgroundColor: 'rgb(144,164,252)'
      }
    ];
    this.barchart = new Chart("BarChart", {
      type: 'bar',
      data: {// values on X-Axis
        labels: labels,
        datasets: dataset,
      },
      options: options,
      plugins: [{
        id: 'paddingBelowLegends',
        beforeInit: function (chart: any, options: any) {
          let fit = chart.legend.fit;
          chart.legend.fit = function () {
            fit.call(this);
            this.height += 20;
          }
        }
      }],
    });
  }

  createPieChart() {
    // options
    let options: any = {
      cutout: '85%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 10,
            boxHeight: 10,
            usePointStyle: true,
            padding: 20,
            pointStyle: 'circle',
            font: {
              family: 'Poppins,sans-serif'
            }
          }
        }
      }
    }

    this.piechart = new Chart("PieChart", {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [30, 40, 10],
          backgroundColor: ['rgb(62,91,208)', 'rgb(80 109 226)', 'rgb(144,164,252)']
        }],

        labels: [
          'Men',
          'Electronics',
          'Women'
        ]
      },
      options: options
    });
  }
}
