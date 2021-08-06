import { Route } from "react-router-dom"
const Welcome = () => {
    return <section>
                <h1>The Welcome page</h1>
                <Route path='/welcome/new-user'>
                    <p>Welcome, New user!</p>
                </Route>
            </section>
};

export default Welcome;