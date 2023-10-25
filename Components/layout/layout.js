import MainNavigation from "./main-navigation"
import Notification from "../ui/notification"
import NotificationContext from "../../store/notification-context"
import { useContext } from "react"
const Layout = (props) => {

    const notificationCtx = useContext(NotificationContext)
    const activeNotification = notificationCtx.notification
    return (
        <>
            <MainNavigation/>
            <main>{props.children}</main>
            {activeNotification && <Notification title={activeNotification.title} status={activeNotification.status} message={activeNotification.message}/>}
        </>
    )
}

export default Layout