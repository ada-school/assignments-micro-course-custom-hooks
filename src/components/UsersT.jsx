import "./UsersT.css";
export function UsersT({ users, title }) {
  return (
    <section>
      <div className="usersTable">
        <aside className="asideUsers">
          <div className="menor_mayor">
            <input type="radio" id="ascendent" name="order" />
            <label htmlFor="ascendent">Menor a mayor edad</label>
          </div>
          <div className="mayor_menor">
            <input type="radio" id="descendent" name="order" />
            <label htmlFor="descendent">Mayor a menor edad</label>
          </div>
        </aside>
        <table>
          <caption>{title}</caption>
          <thead>
            <tr>
              <td>Cedula</td>
              <td>Nombre</td>
              <td>Edad</td>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
