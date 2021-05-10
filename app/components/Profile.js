import React from 'react'
import data from '../data'

function Profile() {
    const dataInfo = data().profile
    return (
        <div>
            <h1 className="title-h center-text">Profile</h1>
            <div className="content">
                <div>
                    <img src={dataInfo.avatarImage} width="200px" alt="user-avatar"/>
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="title-h td-nowrap bold">First name</td>
                            <td className="header-title bold">{dataInfo.firstName}</td>
                        </tr>
                        <tr>
                            <td className="title-h td-nowrap bold">Last Name</td>
                            <td className="header-title bold">{dataInfo.lastName}</td>
                        </tr>
                        <tr>
                            <td className="title-h td-nowrap bold">Phone</td>
                            <td className="header-title bold">{dataInfo.phone}</td>
                        </tr>
                        <tr>
                            <td className="title-h td-nowrap bold">Email</td>
                            <td className="header-title bold">{dataInfo.email}</td>
                        </tr>
                        <tr>
                            <td className="title-h td-nowrap bold">Bio</td>
                            <td className="header-title bold" width="210px">{dataInfo.bio}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile;