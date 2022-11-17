using Microsoft.EntityFrameworkCore;
using school_API.Models;
using System.Diagnostics.CodeAnalysis;

namespace school_API.Data
{
    public class EscolaContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public EscolaContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with connection string from app settings
            options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"));
        }

        public DbSet<Aluno> Aluno { get; set; }
        public DbSet<Curso> Curso { get; set; }
        public DbSet<Carometro> Carometro { get; set; }
    }
}