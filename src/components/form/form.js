import title from "../../img/photo1.jpg";
import './form.scss';

function Form (props){
    return (
        <div className="position">
            <div className="wrapper">
                <img src={title} alt="forecastName"/>
                <form onSubmit={props.weatherMethod}>
                    <input type='text' name='city' placeholder='Місто' className="inputForm"/>
                    <input type='submit' value='submit' className="button"/>
                </form>
            </div>
        </div>
    )
}

export default Form;