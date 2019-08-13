import React from 'react';
import Calendar from '../../components/Calendar/Calendar'
import Entry from '../../components/Entry/Entry'

class CalendarPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date(),
            entries: {},
            currentDay: ''
        }
    }
    handleClickDay(currentDay) {
        this.setState({currentDay})
        console.log(currentDay)
    }
    resetCalendar() {
        this.setState({currentDay: ''})
    }
    componentDidMount() {
    }
    renderCalendar() {
        return <Calendar 
                    handleClickDay={(day) => this.handleClickDay(day)}
                    entries={this.state.entries}/>
    }
    renderEntryPage() {
        const { entries, currentDay } = this.state
        return <Entry 
                    calendar={true}
                    entry={entries[currentDay]}
                    resetCalendar={() => this.resetCalendar()}
                />
    }
    render() {
        const {entries, currentDay} = this.state
        return (
            <section className='calendar-page'>
                {entries[currentDay] ? this.renderEntryPage() : this.renderCalendar()}
            </section>
           
        )
    }
}

export default CalendarPage;