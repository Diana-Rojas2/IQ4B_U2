using Microsoft.AspNetCore.SignalR;

namespace _2._5_WebSockets.Hubs
{
    public class MensajeHub : Hub //: Hereda de la clase Hub
    {
        public async Task EnviarMensaje(string msj){ //Asyn-trabaja con un await
        await Clients.All.SendAsync("EnviarMensajeTodos", msj);

        }
    }
}