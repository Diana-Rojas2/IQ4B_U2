using System.Runtime.CompilerServices;
using System.Security.Claims;
using _2._5_WebSockets.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _2._5_WebSockets.Controllers
{
    public class UsuariosController : Controller
    {
        /* referencia a db context que es el que tiene el acceso a la base de datos  */
        private readonly PeliculasDBContext context;

        public UsuariosController(PeliculasDBContext context)
        {
            this.context = context;
        }

        [HttpGet]/* por defecto esta el metodo GET */
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(Usuarios u)
        {
            /* Validar el usuario y contraseña en la BD */
            if (ModelState.IsValid)
            {
                Usuarios utemp = context.Usuarios.Include(x => x.Roles)
                                .FirstOrDefault(x => x.Usuario == u.Usuario && x.Password == u.Password)!;
                if (utemp != null)
                {
                    List<Claim> claims = new List<Claim>();
                    /* agregar propiedades */
                    claims.Add(new Claim("username", utemp.Usuario!));
                    claims.Add(new Claim(ClaimTypes.NameIdentifier, utemp.Usuario!));
                    claims.Add(new Claim(ClaimTypes.Role, utemp.Roles.Rol));
                    ClaimsIdentity identity = new ClaimsIdentity(claims,
                            CookieAuthenticationDefaults.AuthenticationScheme);
                    ClaimsPrincipal principal = new ClaimsPrincipal(identity);
                    await HttpContext.SignInAsync(principal);
                    return RedirectToAction("Index", "Home");
                }
            }
            return View(u);
        }

        public IActionResult NoPermitido()
        {
            return View();
        }
    }
}