import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <BottomNavigation>
        <a
          href="https://github.com/akshatjindal"
          target="_blank"
          rel="noopener noreferrer"
        >
            <BottomNavigationAction label="Github" icon={<GitHubIcon style={{fontSize:"large", fill: "#c4302b"}}/>} />
        </a>
        <div id="linkedin">
            <a href="https://linkedin.com/in/jindalakshat/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <BottomNavigationAction icon={<LinkedInIcon style={{fill: "#0072b1"}}/>}/>
            </a>
          </div>

        </BottomNavigation>
        
)
}

export default Footer
