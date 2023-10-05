using Microsoft.AspNetCore.SignalR;
using Microsoft.Identity.Client;
namespace _2._5_WebSockets.Hubs
{
    public class MensajeHub : Hub
    {
        public async Task EnviarMensaje(string msj)
        {
            string hora = DateTime.Now.ToShortDateString();
            string fecha = DateTime.Now.ToShortDateString();
            string nuevo = $"Fecha: {fecha}, Hora: {hora}, Mensaje: {msj}";
            await Clients.All.SendAsync("EnviarMensajeTodos", nuevo);
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("UsuarioConectado", Context.ConnectionId);
            await base.OnConnectedAsync(); /* indica cuando alguien se conecta */
        }

        public override async Task OnDisconnectedAsync(Exception e)
        {
            await Clients.All.SendAsync("UsuarioDesconectado", Context.ConnectionId);
            await base.OnDisconnectedAsync(e);
        }

        public async Task EnviarMensajeUsuario(string user, string msj){
            string usuarioAutenticado = Context.UserIdentifier;
            await Clients.User(user)
            .SendAsync("EnviarMsjAutenticado", msj+
            "Enviado de: " + usuarioAutenticado);
        }
    }
}