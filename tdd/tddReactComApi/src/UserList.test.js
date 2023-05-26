import React from 'react'
import UserList from "./UserList"
import {shallow} from "enzyme"

test("renderizacao do conteudo quando o state for mockado manualment", () =>{
    const app = shallow(<UserList />)
    app.instance().setState({data: <li>NomeUsuario</li>})
    app.instance().forceUpdate()
    expect(app.find('li')).toHaveLength(1)
})

test("verificar a renderizao do componente UserList mockando a api de usuários", async () => {
    const app = shallow(<UserList />)
    app.instance().getUsersFromApi = jest.fn();
    app.instance().getUsersFromApi.mockResolvedValue([{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    }])
    await app.instance().getUsers()
    app.instance().forceUpdate();
    expect(app.find('li')).toHaveLength(1)

})