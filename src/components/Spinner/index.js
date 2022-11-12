import spinnerGIF from '../../assets/Spinner.gif';

export const Spinner = () => {
    return <>
        <img src={spinnerGIF} className="d-block m-auto" style={{ width: "200px" }} />
    </>
}