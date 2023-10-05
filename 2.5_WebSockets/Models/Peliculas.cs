using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _2._5_WebSockets.Models
{
    public class Peliculas
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Duracion { get; set; }



        public int GenerosId { get; set; }
        public Generos Generos { get; set; }
    }
}