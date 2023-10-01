using System.Security.Claims;
using _2._5_WebSockets.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

namespace _2._5_WebSockets.Controllers
{
    public class UsuariosController : Controller
    {
        [HttpGet]/* por defecto esta el metodo GET */
        public IActionResult Login(){
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(Usuario u){
            //ToDo Realizar la validacion del usuario
            List<Claim> claims = new List<Claim>();
            /* agregar propiedades */ 
            claims.Add(new Claim("username", u.UserName!));
            claims.Add(new Claim(ClaimTypes.NameIdentifier, u.Nombre!));

            ClaimsIdentity identity = new ClaimsIdentity(claims,
            CookieAuthenticationDefaults.AuthenticationScheme);
            ClaimsPrincipal principal = new ClaimsPrincipal(identity);
            await HttpContext.SignInAsync(principal);
            return RedirectToAction("","");
        }

        public IActionResult NoPermitido(){
            return View();
        }
    }
}