import { useEffect } from "react"
import { post_auth_data } from "../../ApiServices"
import { convertToPayload, getJwtData } from "../../Utils"

function Profile() {

    const getUserData = () => {
        post_auth_data("portal/private", convertToPayload('get-user-by-id', { user_id: getJwtData().sub }), {})
            .then((response) => {
                if (response.data.status) {
                    console.log(response.data.data[0])
                } else {
                    error_swal_toast(response.data.message || "something went wrong");
                }
            }).catch((error) => {
                console.error("Error during signup:", error);
            })
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div>
            <h4 className="text-center">Section to be updated</h4>
        </div>
    )
}

export default Profile
