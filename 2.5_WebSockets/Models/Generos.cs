using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _2._5_WebSockets.Models
{
    public class Generos
    {
        public int Id {get; set;}
        public string Genero {get; set;}
        public ICollection<Peliculas> Peliculas { get; set; }
    }
}