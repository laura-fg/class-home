import React from 'react'; 
import { Link } from 'react-router-dom';
import NavbarLogin from '../../components/navbar';
import { Chart } from 'primereact/chart';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import './home.css';



export default function Home() {


  const basicData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
        {
            label: 'Alunos Aprovados',
            backgroundColor: '#42A5F5',
            data: [65, 59, 80, 81, 86, 25, 70]
        },
        {
            label: 'Alunos Reprovados',
            backgroundColor: '#FFA726',
            data: [28, 19, 20, 19, 14, 47, 30]
        }
    ]
};

const getLightTheme = () => {
  let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: .8,
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };


  return {
    basicOptions,
    
}
}


   const chartData = {
        labels: ['Ausentes nas aulas online', 'Presentes nas aulas online', 'Presencialmente na escola'],
        datasets: [
            {
                data: [70, 40, 30],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };


const { basicOptions} = getLightTheme();
    return(
    
    <>
                
             <NavbarLogin /> 
             {/*<Link to={"/userList"}> Lista de usuários </Link> */}
             <div className="body"> 
             <div className="container-charts">
              <div className="card">
                    <h5>Relatório de Reprovação anual </h5>
                    <p> Levando em conta alunos que não freequentaram as aulas durante o período de pandemia</p> 
                    <Chart type="bar" data={basicData} options={basicOptions} />
                </div>
                <div className="card rosca flex justify-content-center">
                <h5>Relatório de frequência </h5>
                <p> É importante observar que muitos alunos não frequentaram nem online as aulas, o que causou um alto índice de reprovação</p> 
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '60%'}} />
        </div>                                                                                                                                                                                                                                                                                                                                                                                                      
         

         </div>
     </div>
         </>
    )
         
    
}