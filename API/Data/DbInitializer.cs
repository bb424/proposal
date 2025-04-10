using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
            ?? throw new InvalidOperationException("Failed to retrieve store context");

        SeedData(context);
    }

    private static void SeedData(StoreContext context)
    {
        Console.WriteLine("Starting database migration...");
        try
        {
            context.Database.Migrate();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Migration failed: {ex.Message}");
        }
        Console.WriteLine("Migration completed.");

        if (context.Services.Any()){
            Console.WriteLine("Services already exist in the database.");
            return;
        } 

        var services = new List<Service>
        {
            new() {
                    Name = "Weekday field work",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
                    Price = 4000,
                    PictureUrl = "/images/products/sb-ang1.png",
                    Discipline = "Commissioning",
                    Category = "Commissioning",
                    ServiceType = "Bus",
                    Complexity = "Standard",
                    Quantity = 5
            }, 
            new() {
                Name = "Saturday field work",
                Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                Price = 5000,
                PictureUrl = "/images/products/sb-ang2.png",
                Discipline = "Commissioning",
                Complexity = "Overtime 1",
                ServiceType = "Bus",
                Category = "Commissioning",
                Quantity = 1
            },
            new() {
                Name = "Sunday field work",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 8000,
                PictureUrl = "/images/products/sb-core1.png",
                Discipline = "Commissioning",
                Complexity = "Overtime 2",
                ServiceType = "Bus",
                Category = "Commissioning",
                Quantity = 1
            },
            new() {
                Name = "Motor Settings",
                Description =
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                Price = 30000,
                PictureUrl = "/images/products/sb-core2.png",
                Discipline = "Protection",
                Category = "Settings",
                ServiceType = "Bus",
                Complexity = "SEL Standard",
                Quantity = 100
            },
            new() {
                Name = "Automation Stuff",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 25000,
                PictureUrl = "/images/products/sb-Automation1.png",
                Discipline = "Automation",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "HMI",
                Quantity = 100
            },
            new() {
                Name = "Design/Drafting",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 12000,
                PictureUrl = "/images/products/sb-ts1.png",
                Discipline = "Design",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "Autocad",
                Quantity = 100
            },
            new() {
                Name = "ETAP Model",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1000,
                PictureUrl = "/images/products/hat-core1.png",
                Discipline = "Protection",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "Studies",
                Quantity = 100
            },
            new() {
                Name = "RTAC Settings",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 8000,
                PictureUrl = "/images/products/hat-Automation1.png",
                Discipline = "Automation",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "Data collection",
                Quantity = 100
            },
            new() {
                Name = "RTAC Custom Logic",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1500,
                PictureUrl = "/images/products/hat-Automation2.png",
                Discipline = "Automation",
                Complexity = "Custom",
                ServiceType = "Bus",
                Category = "Scheme Design",
                Quantity = 100
            },
            new() {
                Name = "Conversion of pdf drawings",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1800,
                PictureUrl = "/images/products/glove-code1.png",
                Discipline = "Design",
                ServiceType = "Bus",
                Complexity = "Custom",
                Category = "Raster",
                Quantity = 100
            },
            new() {
                Name = "Greenfield design",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1500,
                PictureUrl = "/images/products/glove-code2.png",
                Discipline = "Design",
                ServiceType = "Bus",
                Complexity = "Basic",
                Category = "New drawings",
                Quantity = 100
            },
            new() {
                Name = "Generator Settings - Advanced",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1600,
                PictureUrl = "/images/products/glove-Automation1.png",
                Discipline = "Protection",
                Complexity = "Custom",
                ServiceType = "Bus",
                Category = "SEL-700G",
                Quantity = 100
            },
            new() {
                Name = "Green Automation Automation",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1400,
                PictureUrl = "/images/products/glove-Automation2.png",
                Discipline = "Automation",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "Automation",
                Quantity = 100
            },
            new() {
                Name = "Redis Red Protection",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 25000,
                PictureUrl = "/images/products/boot-redis1.png",
                Discipline = "Redis",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "Protection",
                Quantity = 100
            },
            new() {
                Name = "Core Red Protection",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 18999,
                PictureUrl = "/images/products/boot-core2.png",
                Discipline = "Protection",
                Complexity = "Custom",
                ServiceType = "Bus",
                Category = "Protection",
                Quantity = 100
            },
            new() {
                Name = "Core Purple Protection",
                Description =
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                Price = 19999,
                PictureUrl = "/images/products/boot-core1.png",
                Discipline = "Protection",
                Complexity = "Basic",
                ServiceType = "Bus",
                Category = "Protection",
                Quantity = 100
            },
            new() {
                Name = "Commissioning Purple Protection",
                Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                Price = 15000,
                PictureUrl = "/images/products/boot-ang2.png",
                Discipline = "Commissioning",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "Protection",
                Quantity = 100
            },
            new() {
                Name = "Commissioning Blue Protection",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 18000,
                PictureUrl = "/images/products/boot-ang1.png",
                Discipline = "Commissioning",
                Complexity = "SEL Standard",
                ServiceType = "Bus",
                Category = "Protection",
                Quantity = 100
            },
        };

        Console.WriteLine("Adding seed data...");
        try
        {
            context.Services.AddRange(services);
            context.SaveChanges();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to save changes: {ex.Message}");
        }
        Console.WriteLine("Seed data added successfully.");
    }
}
