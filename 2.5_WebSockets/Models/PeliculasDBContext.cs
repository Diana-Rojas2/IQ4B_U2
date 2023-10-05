using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace _2._5_WebSockets.Models
{
    public class PeliculasDBContext : DbContext
    {
        public PeliculasDBContext(DbContextOptions<PeliculasDBContext> options) : base(options)
        {
        }
        
        /* aqui se indica que las demas clases son tablas y no solo clases */
        public DbSet<Generos> Generos {get; set;}
        public DbSet<Peliculas> Peliculas {get; set;}
        public DbSet<Roles> Roles {get; set;}
        public DbSet<Usuarios> Usuarios {get; set;}
    }
}