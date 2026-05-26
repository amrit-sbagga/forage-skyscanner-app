import React, { Component } from 'react';
import format from 'date-fns/format';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');

const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    nameNarrow: 'S',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    nameNarrow: 'M',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    nameNarrow: 'T',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    nameNarrow: 'W',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    nameNarrow: 'T',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    nameNarrow: 'F',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    nameNarrow: 'S',
    index: 6,
    isWeekend: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date,
      },
    });
  };

  render() {
    const { selectionConfiguration } = this.state;

    return (
      <div className={getClassName('App')}>
        <header className={getClassName('App__header')}>
          <div className={getClassName('App__header-inner')}>
            <BpkText
              tagName="h1"
              textStyle="xxl"
              className={getClassName('App__heading')}
            >
              Flight Schedule
            </BpkText>
          </div>
        </header>
        <main className={getClassName('App__main')}>
          <div className={getClassName('App__calendar')}>
            <BpkCalendar
              id="calendar"
              onDateSelect={this.handleDateSelect}
              formatMonth={formatMonth}
              formatDateFull={formatDateFull}
              daysOfWeek={daysOfWeek}
              weekStartsOn={1}
              changeMonthLabel="Change month"
              nextMonthLabel="Next month"
              previousMonthLabel="Previous month"
              selectionConfiguration={selectionConfiguration}
            />
          </div>
          <div className={getClassName('App__continue')}>
            <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
