import {Link} from 'react-router-dom'
const NotFound = () => {

    return (
        <div>
            <h2>404</h2>
            <p>The requested URL was not found.</p>
            <Link to="/">Redirect to homepage</Link>
        </div>
    )
}

export default NotFound