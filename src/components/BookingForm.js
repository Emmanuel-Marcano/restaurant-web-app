
import FullScreen from "./FullScreen"

function BookingForm(){



    return (
        <>
        <div className="form-container">
        <h1>Reserve a Table</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolor eaque eum voluptas dicta consequatur? Repellat quas laborum accusamus optio?</p>
        <form action="">

            <div>
            <label for="res-date">Choose date: </label>
            <input type="date" id="res-date"/>
            </div>
            <div>
            <label for="res-time">Choose time: </label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            </div>
            <div>
            <label htmlFor="guests">Number of guests: </label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"/>
            </div>
            <div>
            <label htmlFor="occasion">Occasion: </label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            </div>
            <input type="submit" value="Make Your reservation"/>
        </form>
        </div>
     
        </>

    )
}


export default BookingForm