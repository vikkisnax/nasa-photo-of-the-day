// vid reference https://www.youtube.com/watch?v=5OEOLDBow_0

import React, {useEffect, useRef, useState} from "react";
import { Calendar } from "react-date-range";
import format from 'date-fns/format';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


//setDate and calendarDate (the date state) are props passed down from App parent to this child. so the child can change and access the date state now. 
const CalendarComp = ({setDate, calendarDate})=> {
    // const [calendar, setCalendar] = useState(''); // DONT put the date state in the child - i moved it to the parent and passed it down
    // console.log(calendar) //has the current date - not the selected


    //open close the calendar
    const [open, setOpen] = useState(false)

    //refOne from useRef
    const refOne = useRef(null)
    // console.log(refOne)
    


    //set current date on component load. now current date will show in the input (the empty box) since we also reference it below
    useEffect (()=>{
        setDate(format(new Date(), 'yyyy-MM-dd'))
        document.addEventListener('keydown', hideOnEscape, true)
        document.addEventListener('click', hideOnClickOutside,true)
    }, [])
    
    //hide dropdown cal on esc press and click
    const hideOnEscape = (e) => {
        if(e.key === "Escape"){
            setOpen(false);
        }
    }

    //go back under states and make refOne
    const hideOnClickOutside= (e) => {
        // console.log(refOne.current)
        // console.log(e.target) //shows what u clicked
        // && means if the left is true and the right is true then return true, if not, then return setOpen(false)
        //if click target isn't clicking the calendar, then close the calendar -- look below at div ref
        if(refOne.current && !refOne.current.contains(e.target)){
            setOpen(false);
        }
    }

    //on date change, store date arg in state
    const handleSelect=(dateSelected) =>{
        // console.log(date) // look in console
        // console.log(format(date, 'MM/dd/yyy'))
        setDate(format(dateSelected , 'yyyy-MM-dd'))
    }


    return(
        <div className="calendarWrap">

            {/* value is the calendar state above */}
            <div>
                <input
                    // current date will show in the box instead of it being empty. calendarDate is the date state from App
                    value = {calendarDate} 
                    readOnly
                    className="inputBox"
                    //toggle if open state is true or false aka opened or closed:
                    onClick={()=> setOpen(open => !open)}
                />
            </div>

            {/* use {open &&...} with Calendar comp inside after we make the open state -- so calendar shows or doesn't show on screen.. then wrap it in a 'ref' div for our event where cal disappears when we click outside the cal*/}
            <div ref={refOne}>
            {open &&
                <Calendar //calendar component...
                    date={new Date()}
                    onChange={handleSelect}
                    className="CalendarElement" 
                />
            }
            </div>

        </div>
    )
}

export default CalendarComp;