import { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { data } from '../../../data/coinsData';
import { Layout, MiddleLayout, InnerLayout } from '../../../types/coinsInterface';
import { AreaChartComponent } from '../AreaChart';
import { BarChartComponent } from '../BarChart';
import { LineChartComponent } from '../LineChart';
import { PieChartComponent } from '../PieChart';
import { StackBarChartComponent } from '../StackedChart';
import './GridLayout.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const getFromLS = (key: string) => {
  let ls: Layout = {};

  const value = global.localStorage.getItem('rgl-8') || '';

  try {
    ls = JSON.parse(value);
  } catch (e) {
    /*Ignore*/
  }

  return ls[key];
};

const saveToLS = (key: string, value: MiddleLayout) => {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
};

const originalLayouts = getFromLS('layouts') || {};

export const GridLayout = () => {
  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(originalLayouts)),
  );

  const resetLayout = () => {
    setLayouts({});
  };

  const onLayoutChange = (_layout: InnerLayout[], layouts: MiddleLayout) => {
    saveToLS('layouts', layouts);
    setLayouts(layouts);
  };

  return (
    <>
      <div className="button_container">
        <button className="button" onClick={() => resetLayout()}>
          RESET
        </button>
      </div>
      <ResponsiveReactGridLayout
        className="layout"
        rowHeight={30}
        layouts={layouts}
        onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
      >
        <div key="2" data-grid={{ w: 4, h: 8, x: 0, y: 0, minW: 2, minH: 8 }}>
          <AreaChartComponent data={data} />
        </div>
        <div key="3" data-grid={{ w: 4, h: 8, x: 4, y: 0, minW: 2, minH: 8 }}>
          <PieChartComponent data={data} />
        </div>
        <div key="1" data-grid={{ w: 4, h: 8, x: 8, y: 0, minW: 2, minH: 8 }}>
          <LineChartComponent data={data} />
        </div>
        <div key="4" data-grid={{ w: 6, h: 8, x: 0, y: 1, minW: 2, minH: 8 }}>
          <BarChartComponent data={data} />
        </div>
        <div key="5" data-grid={{ w: 6, h: 8, x: 6, y: 1, minW: 2, minH: 8 }}>
          <StackBarChartComponent data={data} />
        </div>
      </ResponsiveReactGridLayout>
    </>
  );
};

