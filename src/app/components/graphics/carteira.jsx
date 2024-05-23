import React from 'react';
import { Line } from 'react-chartjs-2';
import themeWhite from '../theme';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const label = [
  '01 de jan', '02 de jan', '03 de jan', '04 de jan', '05 de jan', '06 de jan', '07 de jan', '08 de jan', '09 de jan', '10 de jan', '11 de jan', '12 de jan', '13 de jan', '14 de jan', '15 de jan', '16 de jan', '17 de jan', '18 de jan', '19 de jan', '20 de jan','21 de jan', '22 de jan', '23 de jan', '24 de jan', '25 de jan', '26 de jan', '27 de jan', '28 de jan', '29 de jan', '30 de jan', '31 de jan', '01 de fev', '02 de fev', '03 de fev', '04 de fev', '05 de fev', '06 de fev', '07 de fev', '08 de fev', '09 de fev', '10 de fev', '11 de fev', '12 de fev', '13 de fev', '14 de fev', '15 de fev', '16 de fev', '17 de fev', '18 de fev', '19 de fev', '20 de fev', '21 de fev', '22 de fev', '23 de fev', '24 de fev', '25 de fev', '26 de fev', '27 de fev', '28 de fev', '29 de fev', '01 de mar', '02 de mar', '03 de mar', '04 de mar', '05 de mar', '06 de mar', '07 de mar', '08 de mar', '09 de mar', '10 de mar', '11 de mar', '12 de mar', '13 de mar', '14 de mar', '15 de mar', '16 de mar', '17 de mar', '18 de mar', '19 de mar', '20 de mar', '21 de mar', '22 de mar', '23 de mar', '24 de mar', '25 de mar', '26 de mar', '27 de mar', '28 de mar', '29 de mar', '30 de mar', '31 de mar', '01 de abr', '02 de abr', '03 de abr', '04 de abr', '05 de abr', '06 de abr', '07 de abr', '08 de abr', '09 de abr', '10 de abr', '11 de abr', '12 de abr', '13 de abr', '14 de abr', '15 de abr', '16 de abr', '17 de abr', '18 de abr', '19 de abr', '20 de abr', '21 de abr', '22 de abr', '23 de abr', '24 de abr', '25 de abr', '26 de abr', '27 de abr', '28 de abr', '29 de abr', '30 de abr', '01 de mai', '02 de mai', '03 de mai', '04 de mai', '05 de mai', '06 de mai', '07 de mai', '08 de mai', '09 de mai', '10 de mai', '11 de mai', '12 de mai', '13 de mai', '14 de mai', '15 de mai', '16 de mai', '17 de mai', '18 de mai', '19 de mai', '20 de mai', '21 de mai', '22 de mai', '23 de mai', '24 de mai', '25 de mai', '26 de mai', '27 de mai', '28 de mai', '29 de mai', '30 de mai', '31 de mai', '01 de jun', '02 de jun', '03 de jun', '04 de jun', '05 de jun', '06 de jun', '07 de jun', '08 de jun', '09 de jun', '10 de jun', '11 de jun', '12 de jun', '13 de jun', '14 de jun', '15 de jun', '16 de jun', '17 de jun', '18 de jun', '19 de jun', '20 de jun', '21 de jun', '22 de jun', '23 de jun', '24 de jun', '25 de jun', '26 de jun', '27 de jun', '28 de jun', '29 de jun', '30 de jun', '01 de jul', '02 de jul', '03 de jul', '04 de jul', '05 de jul', '06 de jul', '07 de jul', '08 de jul', '09 de jul', '10 de jul', '11 de jul', '12 de jul', '13 de jul', '14 de jul', '15 de jul', '16 de jul', '17 de jul', '18 de jul', '19 de jul', '20 de jul', '21 de jul', '22 de jul', '23 de jul', '24 de jul', '25 de jul', '26 de jul', '27 de jul', '28 de jul', '29 de jul', '30 de jul', '31 de jul', '01 de ago', '02 de ago', '03 de ago', '04 de ago', '05 de ago', '06 de ago', '07 de ago', '08 de ago', '09 de ago', '10 de ago', '11 de ago', '12 de ago', '13 de ago', '14 de ago', '15 de ago', '16 de ago', '17 de ago', '18 de ago', '19 de ago', '20 de ago', '21 de ago', '22 de ago', '23 de ago', '24 de ago', '25 de ago', '26 de ago', '27 de ago', '28 de ago', '29 de ago', '30 de ago', '31 de ago', '01 de set', '02 de set', '03 de set', '04 de set', '05 de set', '06 de set', '07 de set', '08 de set', '09 de set', '10 de set', '11 de set', '12 de set', '13 de set', '14 de set', '15 de set', '16 de set', '17 de set', '18 de set', '19 de set', '20 de set', '21 de set', '22 de set', '23 de set', '24 de set', '25 de set', '26 de set', '27 de set', '28 de set', '29 de set', '30 de set', '01 de out', '02 de out', '03 de out', '04 de out', '05 de out', '06 de out', '07 de out', '08 de out', '09 de out', '10 de out', '11 de out', '12 de out', '13 de out', '14 de out', '15 de out', '16 de out', '17 de out', '18 de out', '19 de out', '20 de out', '21 de out', '22 de out', '23 de out', '24 de out', '25 de out', '26 de out', '27 de out', '28 de out', '29 de out', '30 de out', '31 de out', '01 de nov', '02 de nov', '03 de nov', '04 de nov', '05 de nov', '06 de nov', '07 de nov', '08 de nov', '09 de nov', '10 de nov', '11 de nov', '12 de nov', '13 de nov', '14 de nov', '15 de nov', '16 de nov', '17 de nov', '18 de nov', '19 de nov', '20 de nov', '21 de nov', '22 de nov', '23 de nov', '24 de nov', '25 de nov', '26 de nov', '27 de nov', '28 de nov', '29 de nov', '30 de nov', '01 de dez', '02 de dez', '03 de dez', '04 de dez', '05 de dez', '06 de dez', '07 de dez', '08 de dez', '09 de dez', '10 de dez', '11 de dez', '12 de dez', '13 de dez', '14 de dez', '15 de dez', '16 de dez', '17 de dez', '18 de dez', '19 de dez', '20 de dez', '21 de dez', '22 de dez', '23 de dez', '24 de dez', '25 de dez', '26 de dez', '27 de dez', '28 de dez', '29 de dez', '30 de dez', '31 de dez'
]

const values = [
  110213, 109920, 108800, 110058, 110906, 110333, 108967, 108339, 110568, 112558, 112697, 114610, 115489, 117022, 117337, 116753, 119068, 119208, 118757, 119858, 119623, 120420, 118959, 118977, 118246, 117524, 116683, 118388, 118092, 119673, 119072, 119548, 117427, 118897, 117942, 117557, 117671, 119268, 117711, 118218, 117842, 117558, 118090, 120220, 121344, 122003, 122560, 120002, 120188, 121945, 121249, 120859, 120586, 119509, 119378, 119090, 118412, 118350, 118067, 116809, 116171, 115592, 114973, 115404, 114433, 116160, 118135, 117025, 115838, 117124, 118404, 117537, 115744, 117893, 117776, 117331, 115979, 115316, 116885, 117968, 118181, 119393, 118759, 118293, 117864, 118695, 116147, 116009, 115922, 114194, 114875, 115742, 116565, 115055, 113430, 113609, 113283, 114169, 115158, 116737, 117050, 115760, 116526, 115907, 114059, 113996, 113145, 112814, 113762, 112840, 114777, 113303, 112534, 113157, 115062, 118160, 118422, 119268, 119180, 119036, 120561, 120411, 123165, 124639, 124773, 125957, 125626, 126035, 126553, 125517, 125726, 126541, 126168, 127331, 128183, 126802, 126907, 125623, 126010, 127093, 126923, 126406, 129469, 130842, 130202, 131088, 131851, 130826, 132553, 132753, 133523, 134194, 134186, 132697, 132831, 131218, 132023, 132424, 131447, 130841, 130652, 130988, 131515, 129293, 128524, 127319, 127636, 126612, 128275, 127815, 128196, 128970, 128492, 127402, 127752, 128471, 127182, 127593, 130412, 129950, 128216, 128026, 127018, 127809, 128720, 129033, 129916, 130035, 130240, 129417, 129613, 131685, 130155, 129026, 129176, 128336, 128099, 128890, 128335, 127068, 126124, 127668, 127992, 127682, 126758, 126955, 127534, 129125, 128159, 127027, 126931, 126863, 127689, 128106, 126990, 127546, 127313, 127422, 126796, 128858, 129872, 128051, 127396, 125946, 125316, 124389, 124171, 124197, 125124, 125572, 125149, 124718, 124651, 126527, 127352, 125926, 127130, 128506, 128466, 129210, 129468, 128188, 127600, 128155, 128514, 128029, 128280, 128151, 127754, 127412, 117025, 115838, 117124, 118404, 117537, 115744, 117893, 117776, 117331, 115979, 115316, 116885, 117968, 118181, 119393, 118759, 118293, 117864, 118695, 116147, 116009, 115922, 114194, 114875, 115742, 116565, 115055, 113430, 113609, 113283, 114169, 115158, 116737, 117050, 115760, 116526, 115907, 114059, 113996, 113145, 112814, 113762, 112840,118218, 117842, 117558, 118090, 120220, 121344, 122003, 122560, 120002, 120188, 121945, 121249, 120859, 120586, 133523, 134194, 134186, 132697, 132831, 131218, 132023, 132424, 131447, 130841, 130652, 130988, 131515, 129293, 128524, 127319, 127636, 126612, 128275, 127815, 128196, 128970, 128492, 127402, 127752, 128471, 127182, 127593, 118218, 117842, 117558, 118090, 120220, 121344, 122003, 122560, 120002, 120188, 121945, 121249, 120859, 120586, 133523, 134194, 134186, 132697, 132831, 131218, 132023, 132424, 131447, 130841, 130652, 130988, 131515, 129293, 128524
]

const CarteiraGraphic = () => {
  const data = {
    labels: label,
    datasets: [
      {
        data: values,
        fill: true,
        borderColor: '#f0b935',
        tension: 0,
      },
    ],
  };

  const options = {
    autoPadding: true,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Carteira',
        font: {
          family: 'Montserrat',
          size: '16px',
          weight: 'bolder'
        }
      },
    },
  };

  return (
      <Line 
      style={themeWhite}
      data={data} 
      options={options} 
      
      />
  )

}

export default CarteiraGraphic;
