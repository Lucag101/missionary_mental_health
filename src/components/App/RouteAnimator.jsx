import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomePage from "../Home/HomePage";
import Resources from "../Home/Resources";
import Exercises from "../Home/Exercises";
import Analytics from "../Home/Analytics";
import '../../styles/sharedStyles.css'


function RouteAnimator() {
    const location = useLocation();
    
    return(        
        
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={2000}
                classNames="page"
                >
                <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/exercises" element={<Exercises />} />
                    <Route path="/analytics" element={<Analytics />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default RouteAnimator;