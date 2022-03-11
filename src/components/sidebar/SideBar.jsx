import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons'
import './sidebar.css'

export default function SideBar() {
  return (
    <div>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Sales
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}