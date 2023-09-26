import './App.css';
import Chart from './Chart';

function App() {
  const data = {
    labels: ['2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01'],
    datasets: [
      {
        label: 'Candlestick Chart',
        data: [
          { t: '2009-01-01', o: 100, h: 120, l: 90, c: 110 },
          { t: '2010-01-01', o: 110, h: 130, l: 100, c: 120 },
          { t: '2011-01-01', o: 120, h: 140, l: 110, c: 130 },
          { t: '2012-01-01', o: 130, h: 150, l: 120, c: 140 },
          { t: '2013-01-01', o: 140, h: 160, l: 130, c: 150 },
          { t: '2014-01-01', o: 150, h: 180, l: 80, c: 100 },
          { t: '2015-01-01', o: 160, h: 150, l: 160, c: 90 },
          { t: '2016-01-01', o: 170, h: 140, l: 130, c: 110 },
        ],
        borderColor: 'blue',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="App">
      <Chart data={data} />
    </div>
  );
}

export default App;
