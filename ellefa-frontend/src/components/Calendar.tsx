import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

interface Props {
    items: string[];
}

function Calendar({ items }: Props) {
    let events = [{}];

    for (let item of items) {
        let regex = /\d{4}-\d{2}-\d{2}/; //"yyyy-mm-dd format"
        let date = item.match(regex);
        if (date !== null) {
            events.push({
                title: item,
                date: date[0],
            });
        }
    }

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={events}
                height={"90vh"}
            />
        </div>
    );
}

export default Calendar;
