export const MembersItem = ({ member }) => {
  return (
    <div className="col-md-4 col-lg-3 p-4">
      <div className="relative h-full w-full bg-slate-950 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center p-6">
          <div className="rounded-full overflow-hidden w-52 h-52 mb-4">
            <img
              src="https://i.pinimg.com/564x/0a/fa/ef/0afaef389d0ef7b542d23469794d0d49.jpg" // Reemplaza con la URL de tu imagen fija
              alt="Member Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white text-center">
            <span className="text-xl font-semibold">{member}</span>
          </div>
        </div>
      </div>
    </div>
  );
};