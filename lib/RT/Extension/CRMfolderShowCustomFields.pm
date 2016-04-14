package RT::Extension::CRMfolderShowCustomFields;

our $VERSION = '0.1';

1;
__END__

=head1 NAME

RT::Extension::CRMfolderShowCustomFields

=head1 DESCRIPTION

CRMfolderShowCustomFields

This is a basic version, you can find some in-house code lines. We hope it would work on your system as well - it is working on our live RT, but this plugin is not tested on raw RT instance.
Use it on your own risk.

=head1 INSTALLATION AND CONFIGURATION


1. Enable the Extension in the SiteConfig, eg.:
    Set(@Plugins, qw(RT::Extension::xyz RT::Extension::CRMfolderXXX));

=head1 AUTHOR

crmfolder development team, especially xy1, xy2  << <developers@crmfolder.com> >>

=head1 LICENCE AND COPYRIGHT

This module is free software; you can redistribute it and/or
modify it under the same terms as Perl itself. See L<perlartistic>.

