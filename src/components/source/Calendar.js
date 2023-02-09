import Calendar from 'react-calendar'  
// react-calendar library 설치
import 'react-calendar/dist/Calendar.css'
import './../../styles/calendar.css'

const CustomCalendar = () => {
    return (
        <div>
            <Calendar
                // 일요일이 앞으로
                calendarType="Hebrew"
                // 날짜 뒤에 '일' 지우기
                formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
            />
        </div>
    )
}

export default CustomCalendar