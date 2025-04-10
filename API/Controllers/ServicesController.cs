using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] //https://localhost:5001/api/services
    [ApiController]
    public class ProductsController(StoreContext context) : ControllerBase
    {


        [HttpGet]
        public async Task<ActionResult<List<Service>>> GetServices()
        {
            return await context.Services.ToListAsync();
        }

        [HttpGet("{id}")] // api/products/2
        public async Task<ActionResult<Service>> GetService(int id)
        {
            var service = await context.Services.FindAsync(id);

            if(service == null) return NotFound();

            return service;
        }
    }
}
