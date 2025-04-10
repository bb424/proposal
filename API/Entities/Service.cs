namespace API.Entities;

public class Service
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required string Description { get; set; }

    public long Price { get; set; }

    public required string PictureUrl { get; set; }
    
    public required string Discipline { get; set; }

    public required string Category { get; set; }

    public required string ServiceType { get; set; }
    
    public required string Complexity { get; set; }
    
    public int Quantity { get; set; }
}
