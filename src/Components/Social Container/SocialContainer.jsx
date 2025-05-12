import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import links from '../../Mockup Data/Social Icons/SocialIcons.json';
import './SocialContainer.css';

const iconMap = {
    faGithub: faGithub,
    faAt: faAt,
};

function SocialContainer() {
    return (
        <div className="social-container">
            {
                links.map((e, index) => (
                    <Link
                        to={e.link}
                        title={e.title}
                        aria-label={e.title}
                        key={index}
                        className="social-container__link"
                        style={{ '--social-borderColor': e.color }}
                    >
                        <FontAwesomeIcon
                            icon={iconMap[e.icon]}
                            className="social-container__icon"
                            style={{ '--social-color': e.color }}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default SocialContainer;
