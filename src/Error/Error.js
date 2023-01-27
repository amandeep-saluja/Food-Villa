import './Error.css';
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const { status, statusText, data } = useRouteError();
    return (
        <div id={'error-block'}>
            <h2>Something went wrong...!</h2>
            <h3 className={'status'}>Status - {status}</h3>
            <h3 className={'statusText'}>Page - {statusText}</h3>
            <h3 className={'data'}>Description - {data}</h3>
        </div>
    );
};

export default Error;
