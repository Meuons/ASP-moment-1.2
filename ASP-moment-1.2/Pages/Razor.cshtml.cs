using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ASP_moment_1._2.Pages
{
    public class RazorModel : PageModel
    {
        public void OnGet()
        {

        }


        //Get the current date and time
        public static string getDate()
        {
            string date = DateTime.Today.ToString("yyyy/MM/dd");

            return date;
        }
    }
}
