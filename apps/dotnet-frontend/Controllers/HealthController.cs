using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using dotnet_frontend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet_frontend.Controllers
{
    public class HealthController : Controller
    {
        private readonly ILogger<HealthController> _logger;
        private readonly IHttpClientFactory _client;
        public HealthController(ILogger<HealthController> logger, IHttpClientFactory client)
        {
            _logger = logger;
            _client = client;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<JsonResult> GetApiHealthStatus()
        {
            HealthResponse healthResponse = null;
            var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost:3000/v1/health");
            var client = _client.CreateClient();
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                using var responseStream = await response.Content.ReadAsStreamAsync();
                healthResponse = await JsonSerializer.DeserializeAsync<HealthResponse>(responseStream);
            }

            return Json(healthResponse);
        }



    }

}