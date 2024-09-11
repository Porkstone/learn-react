"use client"
import { useState } from "react";
import { useEffect } from "react";


function addDays(date: Date, days: number): string | undefined {
    console.log(date)
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0]
}

export default function App() {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    useEffect(() => {
        if (checkIn > checkOut) {
            console.log('Check In is greater than Check Out')
            console.log(checkIn)
            console.log(checkOut)
            const newCheckOutDate: string | undefined = addDays(new Date(checkIn), 1)
            if (newCheckOutDate != undefined) {
                setCheckOut(newCheckOutDate)
            }
        } else {
            console.log('Dates are valid')
        }
    }, [checkIn])


    // Footgun Warning!!
    // UseEffect has a lot of implicit behaviors that can make the code hard to understand.
    // See Theo's video for more info https://youtu.be/Zw4lJqBphvA?si=4QdeUfr3hSdllcvR
    useEffect(() => {
        if (checkOut < checkIn) {
            console.log('Check Out is less than Check In')
            const newCheckInDate: string | undefined = addDays(new Date(checkOut), -1)
            if (newCheckInDate != undefined) {
                setCheckIn(newCheckInDate)
            }
        } else {
            console.log('Dates are valid')
        }
        // This runs on unmount
        return () => { console.log('Cleanup up here') }
    }, [checkOut])

    return (
        <main className="p-5 ">
            <div>
                <div>
                    <label htmlFor="checkIn">Check In: </label>
                    <input name="checkIn" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="checkOut">Check Out: </label>
                    <input name="checkOut" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                </div>

                <p>Your check in date is {checkIn}</p>
                <p>Your check out date is {checkOut}</p>

            </div>
        </main>
    );
}